import java.util.Arrays;
import java.util.Comparator;

public class SearchAlgorithms {

    public static Product linearSearch(Product[] products, int id) {
        for (Product product : products) {
            if (product.getProductId() == id) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int id) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].getProductId() == id) {
                return products[mid];
            } else if (products[mid].getProductId() < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Phone", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(102, "Watch", "Accessories")
        };

        Product result1 = linearSearch(products, 102);
        System.out.println("Linear Search: " + result1);

        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        Product result2 = binarySearch(products, 102);
        System.out.println("Binary Search: " + result2);
    }
}