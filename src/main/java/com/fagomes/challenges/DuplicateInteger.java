package com.fagomes.challenges;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class DuplicateInteger {
    public static boolean hasDuplicate(int[] nums) {
        Set<Integer> numSet = Arrays.stream(nums).boxed().collect(Collectors.toSet());

        return nums.length != numSet.size();
    }
}
