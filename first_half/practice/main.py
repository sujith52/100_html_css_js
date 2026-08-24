# from array import *

# arr = array('i',[10,50,60,85,26,35,536])

# for a in arr:
#     print(a)
#     print("just things bro")



class Node:
    def __init__(self,dataval = None):
        self.dataval = dataval
        self.nextval = None

class Slinkedlist:
    def __init__(self):
        self.headval = None

list1 = Slinkedlist()
list1.headval("mon")