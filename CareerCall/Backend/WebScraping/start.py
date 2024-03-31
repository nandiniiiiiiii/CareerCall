# allt he web scraping related code is here
import sys
from playwright.sync_api import sync_playwright
import time
import pandas as pd

print(sys.argv[1], "hello")

def getdata(page):
    elements = page.query_selector_all('.jcs-JobTitle>span')
    for element in elements:
        # print(element.text())
        title = element.get_attribute('title')
        print(title)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context()

    page1 = context.new_page()
    # page2 = context.new_page()
    # page3 = context.new_page()

    page1.goto("https://in.indeed.com")
    box1 = page1.wait_for_selector('#text-input-what')
    box1.type(sys.argv[1])
    page1.wait_for_selector('.yosegi-InlineWhatWhere-primaryButton').click()
    page1.wait_for_timeout(10000)
    getdata(page1)
    
    # page2.goto("https://www.jiomart.com/")
    # box2 = page2.wait_for_selector('#twotabsearchtextbox')
    # box2.type(sys.argv[1])
    # page2.wait_for_selector('#nav-search-submit-button').click()
    # page2.wait_for_timeout(10000)

    # page3.goto("https://www.snapdeal.com/")
    # box3 = page3.wait_for_selector('#inputValEnter')
    # box3.type(sys.argv[1])
    # page3.wait_for_selector('.searchformButton').click()
    # page3.wait_for_timeout(10000)

    browser.close()
