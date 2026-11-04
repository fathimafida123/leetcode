class Solution(object):
    def isPalindrome(self, x):
        rev=""
        for i in str(x):
            rev=i+rev
        if rev==str(x):
            return True
        else:
            return False        
            
        