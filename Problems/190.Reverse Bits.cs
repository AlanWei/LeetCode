//Reverse bits of a given 32 bits unsigned integer.

//For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), 
//return 964176192 (represented in binary as 00111001011110000010100101000000).

public class Solution {
    public uint reverseBits(uint n) {
        string binary = Convert.ToString(n, 2);
        string result = "";
        StringBuilder sb = new StringBuilder();
        Console.Write(binary.Length);
        if (binary.Length <= 32){
            string addZero = Solution.formZero(32 - binary.Length);
            sb.Append(binary);
            sb.Insert(0, addZero);
            result = sb.ToString();
        }
        
        
        char[] binaryArray = result.ToCharArray();
        Array.Reverse(binaryArray);
        
        string result_string = new string(binaryArray);
        
        uint result_uint;
        
        result_uint = (uint) Convert.ToInt32(result_string, 2);
        
        return result_uint;
    }
    
    public static string formZero(int length){
        string result = "";
        for (int i = 0; i < length; i++){
            result = result + 0;
        }
        
        return result;
    }
}