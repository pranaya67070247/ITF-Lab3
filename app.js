function setuserName() {
  let myTitle = document.getElementById("my-title");
  myTitle.innerText =
    document.getElementById("userName").value + "'s Phone Book";
}
function setProfile() {
  let myProfile = document.getElementById("img-profile");
  myProfile.src = document.getElementById("imgURL").value;
}
function addContact() {
  let currentNo = 1;
  let currentInfo = [{ No: 1, Name: "LoveLoveUG<3", Phone: "0912345678" }];
  addName = document.getElementById("addName");
  addTel = document.getElementById("addTel");
  myTable = document.getElementById("my-table");
  template =
    "<tr>\
        <td>\
            " +
    (currentNo + 1) +
    "\
        </td>\
        <td>\
            " +
    addName.value +
    "\
        </td>\
        <td>\
            " +
    addTel.value +
    "\
        </td>\
    </tr>";
  currentInfo.push({
    No: currentNo + 1,
    Name: addName.value,
    Phone: addTel.value,
  });
  currentNo += 1;
  myTable.innerHTML = myTable.innerHTML + template;
}
function exportCSV() {
  let data = "data:text/csv;chatset=utf-8," + convertToCSV(currentInfo);
  let encodeData = encodeURI(data);
  window.open(encodeData);
}
function convertToCSV(arr) {
  let array = [Object.keys(arr[0])].concat(arr);
  return array
    .map((it) => {
      const temp = Object.values(it).map((text) => `"${text}"`);
      return temp.toString();
    })
    .join("\n");
}
