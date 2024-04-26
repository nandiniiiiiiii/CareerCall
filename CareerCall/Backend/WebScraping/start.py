# allt he web scraping related code is here
import sys
from playwright.sync_api import sync_playwright
import time
import pandas as pd

print(sys.argv[1], "hello")

def getdata(page):
    d = {"title": [],"company": [] , "link": []}
    # elements = page.query_selector_all('.resultContent')    
    # for ele in elements:
    #     print(ele)
    #     # title = ele.query_selector_all('.jcs-JobTitle>span').__getattribute__('title')
    #     # link = ele.query_selector_all('.jcs-JobTitle').__getattribute__('href')
    #     # print(title)
    #     # print(f"indeed.com{link}")
    elements = page.query_selector_all('.jcs-JobTitle>span')
    for element in elements:
        # print(element.text())
        title = element.get_attribute('title')
        d['title'].append(title)
    elements2 = page.query_selector_all('.jcs-JobTitle')
    for element in elements2:
        # print(element.text())
        link = element.get_attribute('href')
        # print(f"indeed.com{link}")
        d['link'].append(f"https://indeed.com{link}")

    elements3 = page.query_selector_all('.css-92r8pb')
    for element in elements3:
        # print(element.text())
        company = element.inner_text()
        # print(company)
        d['company'].append(company)

    print(d)
    df = pd.DataFrame.from_dict(d)
    df.to_csv("./jobs.csv",header=True,index=False)
        

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
    
