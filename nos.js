for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  td1.textContent = i;
  td2.textContent = "Another value";
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
}
