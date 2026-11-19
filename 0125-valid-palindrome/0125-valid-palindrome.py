class Solution(object):
    def isPalindrome(self, s):
        data=""
        for c in s:
            if c.isalnum():
                data+=c.lower()
        rev=data[::-1]
        if rev==data:
            return True
        else:
            return False            


        