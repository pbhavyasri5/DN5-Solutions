package com.utils; // <-- CHECK IF THIS IS MISSING!

public class StringFormatter {
    public static String convertToBanner(String message) {
        return "=== " + message.toUpperCase() + " ===";
    }
}