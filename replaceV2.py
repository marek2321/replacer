
import os

directotyName=input().lower()
os.mkdir(directotyName)
scriptPath=__file__.replace('replaceV2.py','')

def CopyFiles(path):
    path=path+'/'
    for x in [x for x in os.listdir(scriptPath+'/user'+path) if '.ts' in x]:
        with open(directotyName+path+x.replace(scriptPath+'/user',directotyName),'w') as file:
            file.write(ReplaceKeyWords(path+x))

    for x in [x for x in os.listdir(scriptPath+'/user'+path) if '.ts' not in x]:
        os.mkdir(directotyName+path+x.replace(scriptPath+'/user',directotyName)) 
        CopyFiles(path+x)

def ReplaceKeyWords(path):
    with open(scriptPath+'/user'+path,'r')as file:
        data=file.read()
    x=directotyName.split('-')

    test=[
        ['{/acs/}',' '.join([a.capitalize() for a in x])],
        ['{/acd/}','-'.join([a.capitalize() for a in x])],
        ['{/acj/}',''.join([a.capitalize() for a in x])],
        ['{/fcs/}',' '.join([a if a is not x[0] else a.capitalize() for a in x])],
        ['{/flj/}',''.join([a.capitalize() if a is not x[0] else a for a in x])],
        ['{/auj/}',directotyName.replace('-','').upper()],
        ['{/ald/}',directotyName],
        ['{/alj/}',''.join(x)],
        ['{/key/}','_'.join(x).upper()]
        ]

    for x in test:
        data=data.replace(x[0],x[1])
        
    
    
    return data

CopyFiles('')