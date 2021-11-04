![Header](https://github.com/keyofevergreen/react-input-with-date-format-support/blob/master/public/assets/input.gif)
# 🔎Input with date format support
Recently I’ve received a test task where I needed to implement a text input with the ability to convert a valid text to a date and then work with it.

I searched all over the internet but didn't find a similar solution, so I'll post it for others just in case. Could be useful for someone :)

### 💡The algorithm is as follows:
1. Find out the position of the cursor.
2. If the input is a valid date form, then
3. if the cursor is in the form area (day, month, year, etc.), then
4. Select this form area and change.

### There are two ways in my solution to change the date:
1. Cyclically.
Rotate the date within the selection area (Example: December 31, 2021 -> December 1, 2021).
2. Non-cyclical.
Rotate the date within the whole date (For example: December 31, 2021 -> January 1, 2022).

### 🛠How to install
1. Clone this repository.
```
git clone https://github.com/keyofevergreen/react-input-with-date-format-support.git
```
2. Go to the cloned directory.
3. Run `npm install`.
4. Run `npm start`. The command will start a local live server. Open (http://localhost:3000/) in your browser, if the tab doesn't open automatically.

### ⌨How to use

`Press Enter` if you want to convert the text to date format (if valid).\
`Press ↑ or ↓` to change the date cyclically in the cursor area.\
`Press ctrl + ↑ or ctrl + ↓` to change the date non-cyclically in the cursor area.
