package com.fagomes.challenges;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class IsAnagram {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        Map<String, Integer> tMap = Arrays
            .stream(t.split(""))
            .reduce(
                new HashMap<>(),
                (acc, c) -> {
                    acc.put(c, acc.getOrDefault(c, 0) + 1);
                    return acc;
                },
                (map1, map2) -> {
                    map2.forEach((key, value) -> 
                        map1.merge(key, value, Integer::sum));
                    return map1;
                }
            );

        Map<String, Integer> sMap = Arrays
            .stream(s.split(""))
            .reduce(
                new HashMap<>(),
                (acc, c) -> {
                    acc.put(c, acc.getOrDefault(c, 0) + 1);
                    return acc;
                },
                (map1, map2) -> {
                    map2.forEach((key, value) -> 
                        map1.merge(key, value, Integer::sum));
                    return map1;
                }
            );
        
        for (String key : sMap.keySet()) {
            if (!sMap.get(key).equals(tMap.getOrDefault(key, null))) {
                return false;
            }
        }

        return true;
    }
}
