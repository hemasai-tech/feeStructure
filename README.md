This React Native application allows users to calculate fees based on different criteria such as fee type, nationality, course, and level. The app uses the @react-native-picker/picker library for dropdown selection.

##  Functionality
# Header
   - Displays the title "Fee Structure" in a styled header.
# Fee Selection
   - Users can select the fee type from the first dropdown (Picker) labeled "Please Select Fee."
   - Options include "Exam Fee" and "Application Fee."
# Nationality Selection
   - Once a fee type is selected, the second dropdown appears for selecting the nationality.
   - Options are dynamically populated based on the selected fee type.
# Course Selection
   - After choosing the nationality, the third dropdown becomes available for selecting the course.
   - Options are dynamically populated based on the selected fee type and nationality.
# Level Selection
  - After choosing the course, the fourth dropdown allows users to select the level.
  - Options are dynamically populated based on the selected fee type, nationality, and course.
# Fee Calculation
  - The final amount is calculated based on the selected fee type, nationality, course, and level.
  - The calculated amount is displayed below the dropdowns.
# Code Structure
   The code is organized with separate functions (handleFeeChange, handleNationalityChange, etc.) for handling changes in each dropdown.
   The feeStructure object stores the fee information in a structured format.

# Usage
# Clone the repository.

- Install dependencies using npm install.
- Run the application using npm run android / npx react-native run-android.
- Open the application on an emulator or device.

# Dependencies
- React
- React Native
- @react-native-picker/picker


# Styling
- The app includes a styled header with a blue background, white text, and a bottom border.
- The final amount is displayed with a margin for better visibility.

# Note
- Make sure to have the required dependencies installed before running the application.

- Adjust styling and colors as needed for project.