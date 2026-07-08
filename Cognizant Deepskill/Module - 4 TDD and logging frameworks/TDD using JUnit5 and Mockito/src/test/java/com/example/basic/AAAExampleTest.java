package com.example.basic;

import com.example.calculator.Calculator;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AAAExampleTest {

    Calculator calculator;

    @BeforeEach
    void setUp() {

        calculator = new Calculator();
        System.out.println("Setup Executed");

    }

    @AfterEach
    void tearDown() {

        System.out.println("Cleanup Executed");

    }

    @Test
    void testAdditionAAA() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);

    }

    @Test
    void testMultiplicationAAA() {

        // Arrange
        int a = 8;
        int b = 5;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(40, result);

    }

}