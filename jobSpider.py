from bs4 import BeautifulSoup
import requests
url = "https://www.sarkariresult.com/"
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html5lib')

def Results():
    div = soup.find('div',attrs={'id':'box1','align':'left'}).find('div',attrs={'id':'post'}).find_all("ul")
    

    for result in div:
        x = result.li.a.find_next('a')
        print(x.text)




def jobs():
    div = soup.find('div',attrs={'id':'box1','align':'right'}).find('div',attrs={'id':'post'}).find_all("ul")
    
    for job in div:
        x = job.li.a.find_next('a')
        print(x.text)

    


def admitCards():
    div = soup.find('div',attrs={'id':'post','align':'left'}).find_all('ul')

    for admitCard in div:
        x = admitCard.li.a.find_next('a')
        print(x.text)



