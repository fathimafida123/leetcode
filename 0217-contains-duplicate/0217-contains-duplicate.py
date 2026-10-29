class Solution(object):
    def containsDuplicate(self, nums):
       unique=set(nums)
       if len(unique)!=len(nums):
          return True
       else:
          return False      