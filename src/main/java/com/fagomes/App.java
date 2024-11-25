package com.fagomes;

import com.fagomes.challenges.DuplicateInteger;
import com.fagomes.challenges.IsAnagram;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println(IsAnagram());
    }

    private static boolean DuplicateInteger() {
        int[] nums = {1, 2, 3, 4};
        int[] nums2 = {1, 2, 3, 3};

        return DuplicateInteger.hasDuplicate(nums2);
    }

    private static boolean IsAnagram() {
        String testA1 = "racecar";
        String testB1 = "carrace";

        return IsAnagram.isAnagram(testA1, testB1);
    }
}
