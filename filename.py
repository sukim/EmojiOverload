def get_files(p=None):
  p=p or '.'
  import os;
  for li in os.listdir(p):
    if li.find('_key')>0: continue
    if li.find('.png')<0: continue    
    print li.split('.')[0]

if __name__=='__main__':
  import sys
  get_files(sys.argv[1])