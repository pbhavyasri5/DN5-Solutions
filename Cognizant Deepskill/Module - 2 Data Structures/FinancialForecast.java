public class FinancialForecast {

    public static double futureValue(double amount, double growthRate, int years) {
        if (years == 0) {
            return amount;
        }
        return futureValue(amount, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double amount = 10000;
        double growthRate = 0.08;
        int years = 5;

        double result = futureValue(amount, growthRate, years);
        System.out.printf("Future Value: %.2f%n", result);
    }
}