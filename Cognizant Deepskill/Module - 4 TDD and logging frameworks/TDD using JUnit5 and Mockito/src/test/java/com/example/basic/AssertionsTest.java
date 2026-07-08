package com.example.basic;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    void testAssertions() {

        assertEquals(5, 2 + 3);

        assertTrue(10 > 2);

        assertFalse(2 > 10);

        assertNull(null);

        assertNotNull(new Object());

        assertSame("Java", "Java");

        assertNotSame("Java", new String("Java"));

    }

}