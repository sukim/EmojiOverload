def get_files(p=None):
  p=p or '.'
  import os;
  for li in os.listdir(p):
    if li.find('_key')>0: continue
    if li.find('.png')<0: continue    
    print li.split('.')[0]
def read_txt(p=None):
	import csv
	p=p or 'emoji'
	if p=='emoji': pth='emojiTwo.txt'
	elif p=='moon': pth='moon.txt'
	elif p=='meow': pth='meow.txt'
	elif p=='bear': pth='bear.txt'
	elif p=='doraemon': pth='doraemon.txt'
	fn=open(pth,'r')
	l= [row for row in csv.reader(fn) if row[0].find('#')<0]
	fn.close()
	return l
def create_def1(p=None):
	p=p or 'emoji'
	l=read_txt(p)
	s='var %s=new Emoji('%p
	for n,li in enumerate(l): 
		if n==0: s=s+'\'%s\''%li[0]
		else: s=s+',\'%s\''%li[0]
	s=s+',\'%s\');'%p
	print s
def create_def2(p=None):
	p=p or 'emoji'
	l=read_txt(p)
	s='function Emotions(';
	for n,li in enumerate(l):
		if n==0: s=s+'%s'%li[1]
		else: s=s+',%s'%li[1]
	s=s+' ){'
	for n,li in enumerate(l):
		if n==0: s=s+'\n\tthis.%s=%s;\n'%(li[1].strip(),li[1].strip())
		else: s=s+'\tthis.%s=%s;\n'%(li[1].strip(),li[1].strip())
		
	s=s+' }';
	print s

def create_def3(p=None):
	p=p or 'emojiTwo.txt'
	l=read_txt(p)
	s='function Emoji(';
	for n,li in enumerate(l):
		if n==0: s=s+'%s'%li[1]
		else: s=s+',%s'%li[1]
	s=s+' ,path){';
	s=s+'\n\tthis.emotions=new Emotions('
	for n,li in enumerate(l):
		if n==0: s=s+'%s'%li[1]
		else: s=s+',%s'%li[1]
	s=s+' );';	
	s=s+' \n\tthis.path=path;';
	s=s+' \n};';	
	print s


if __name__=='__main__':
  import sys
  #get_files(sys.argv[1])
  create_def1(sys.argv[1])
  create_def2(sys.argv[1])
  create_def3(sys.argv[1])