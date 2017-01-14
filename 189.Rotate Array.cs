public class Solution {
    public void Rotate(int[] nums, int k) {
        int length = nums.Length;
        
        k = k % length;
        
        int[] sub = new int[k];
        int[] sub2 = new int[length - k];
        
        Array.Copy(nums, length-k, sub, 0, k);
        Array.Copy(nums, 0, sub2, 0, length-k);
        
        
        
        int[] result = new int[length];
        sub.CopyTo(result, 0);
        sub2.CopyTo(result, k);
        
        result.CopyTo(nums, 0);
    }
}