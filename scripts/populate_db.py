# -*- coding: utf-8 -*-
from pymongo import MongoClient

DB = "tweetSearch"
FILE = "data/assignment_tweet.txt"
LINE_LENGTH = 170
NUM_HEADER_LINES = 2


def build_tweets_from_txt(lines):
    """
    Decodes each line, and looks for a certain line length and parses each line
    into tweet objects.
    """
    tweets = []
    current_line = ""
    for line in lines:
        decoded_line = line.decode('utf-8')
        current_line += decoded_line
        current_line_len = len(current_line)
        if current_line_len == LINE_LENGTH:
            tweet = parse_tweet(current_line)
            tweets.append(tweet)
            current_line = ""
        elif current_line_len < LINE_LENGTH:
            # This might not be the end of the tweet, add the next line.
            continue
        elif current_line_len > LINE_LENGTH:
            # In the odd case the the line is longer than expected, there might
            # have been an invalid prior line and this line is valid. Check it.
            decoded_line_len = len(decoded_line)
            if decoded_line_len == LINE_LENGTH:
                tweet = parse_tweet(decoded_line)
                tweets.append(tweet)
                current_line = ""
            else:
                print("Something went wrong, current line is {}: {}".format(
                    current_line_len, current_line
                ))
                current_line = ""
    return tweets


def parse_tweet(txt):
    """
    Returns a tweets object in the following format:
    {
        'text': u'President Resigns in Georgia\u2019s Breakaway Region of Abkhazia http://t.co/DAploRvCvV',
        'createdAt': u'2014-06-01 22:03:27',
        'userId': u'nytimes'
    }
    """
    try:
        created_at = txt[0:19]
        text = txt[20:160].strip()
        user_id = txt[161:].strip()
    except Exception as e:
        print("Not a valid tweet: {}".format(e))
    else:
        return {
            "createdAt": created_at,
            "text": text,
            "userId": user_id
        }


def save_tweets_to_db(tweets):
    client = MongoClient()
    db = client[DB]
    Tweets = db.tweets
    Tweets.insert(tweets)


tweets = []
with open(FILE) as file:
    lines = file.readlines()
    # Remove header lines
    lines = lines[NUM_HEADER_LINES:]
    tweets = build_tweets_from_txt(lines)

save_tweets_to_db(tweets)
