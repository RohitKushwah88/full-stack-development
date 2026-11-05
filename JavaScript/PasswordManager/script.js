


const LOCAL_STORAGE_DATA_KEY = "PasswordManagerData";

function ClearForm() {
  document.getElementById("websiteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("cfPassword").value = "";

  document.querySelectorAll("#password, #cfPassword").forEach(input => {
    input.type = "password";
  });

  document.querySelectorAll(".password-eye").forEach(icon => {
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
  });
}

function togglePassword(id, icon) {
  const password = document.getElementById(id);

  if (password.type === "password") {
    password.type = "text";
    icon.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    password.type = "password";
    icon.classList.replace("bi-eye-slash", "bi-eye");
  }
}

function toggleTablePassword(icon) {
  const password = icon.previousElementSibling;

  if (password.type === "password") {
    password.type = "text";
    icon.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    password.type = "password";
    icon.classList.replace("bi-eye-slash", "bi-eye");
  }
}

function SavePassword() {
  const wn = document.getElementById("websiteName").value.trim();
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value;
  const cps = document.getElementById("cfPassword").value;

  if (!wn || !un || !ps || !cps) {
    alert("All fields Required");
    return;
  }

  if (ps !== cps) {
    alert("Password and Confirm Password Not Match");
    return;
  }

  const newPacket = {
    id: Date.now(),
    websiteName: wn,
    userName: un,
    password: ps
  };

  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  localStorageData.push(newPacket);

  localStorage.setItem(
    LOCAL_STORAGE_DATA_KEY,
    JSON.stringify(localStorageData)
  );

  RenderData();
  ClearForm();
}

function RenderData() {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  const TableBody = document.getElementById("dataTable");

  TableBody.innerHTML = "";

  if (localStorageData.length === 0) {
    TableBody.innerHTML = `
      <tr>
        <td colspan="5">No Saved Password Found</td>
      </tr>
    `;
    return;
  }

  localStorageData.forEach((element, index) => {
    const TR = document.createElement("tr");

    const tdIndex = document.createElement("td");
    tdIndex.textContent = index + 1;

    const tdWebsite = document.createElement("td");
    tdWebsite.textContent = element.websiteName;

    const tdUser = document.createElement("td");
    tdUser.textContent = element.userName;

    const tdPassword = document.createElement("td");

    const passwordBox = document.createElement("div");
    passwordBox.className =
      "d-flex align-items-center justify-content-center gap-2";

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.value = element.password;
    passwordInput.readOnly = true;
    passwordInput.className =
      "form-control-plaintext text-center p-0";
    passwordInput.style.width = "100px";

    const eyeIcon = document.createElement("i");
    eyeIcon.className = "bi bi-eye";
    eyeIcon.style.cursor = "pointer";
    eyeIcon.onclick = function () {
      toggleTablePassword(this);
    };

    passwordBox.append(passwordInput, eyeIcon);
    tdPassword.appendChild(passwordBox);

    const tdAction = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
      DeleteItem(element.id);
    };

    tdAction.appendChild(deleteButton);

    TR.append(
      tdIndex,
      tdWebsite,
      tdUser,
      tdPassword,
      tdAction
    );

    TableBody.appendChild(TR);
  });
}

function DeleteItem(ItemID) {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  if (localStorageData.length === 0) {
    alert("Nothing to Delete");
    return;
  }

  const newData = localStorageData.filter(
    item => item.id !== ItemID
  );

  localStorage.setItem(
    LOCAL_STORAGE_DATA_KEY,
    JSON.stringify(newData)
  );

  RenderData();
}

RenderData();
