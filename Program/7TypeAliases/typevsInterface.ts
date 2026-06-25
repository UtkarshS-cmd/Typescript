// | Feature                                | `type` (Type Alias)           | `interface`                    |      |
// | -------------------------------------- | ----------------------------- | ------------------------------ | ---- |
// | **Purpose**                            | Creates an alias for any type | Defines the shape of an object |      |
// | **Can represent objects?**             | ✅ Yes                         | ✅ Yes                          |      |
// | **Can represent primitives?**          | ✅ Yes                         | ❌ No                           |      |
// | **Can represent unions (`              | `)?**                         | ✅ Yes                          | ❌ No |
// | **Can represent intersections (`&`)?** | ✅ Yes                         | ❌ No (uses `extends`)          |      |
// | **Can represent tuples?**              | ✅ Yes                         | ❌ No                           |      |
// | **Can represent function types?**      | ✅ Yes                         | ✅ Yes                          |      |
// | **Can represent arrays?**              | ✅ Yes                         | ✅ Yes                          |      |
// | **Declaration merging**                | ❌ Not supported               | ✅ Supported                    |      |
// | **Inheritance**                        | Using `&`                     | Using `extends`                |      |
// | **Can be reopened later?**             | ❌ No                          | ✅ Yes                          |      |
// | **Best for library APIs?**             | Less preferred                | More preferred                 |      |
// | **Best for complex types?**            | ✅ Excellent                   | ❌ Limited                      |      |
// | **Perfor**                             |                               |                                |      |
