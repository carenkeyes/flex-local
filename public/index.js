
let haveCheckedPort = false;

if(!haveCheckedPort && window.location.port === "8080"){
  console.log("8080")
  haveCheckedPort = true;
  const root = document.getElementById("root");
  const wrapper = document.getElementById("wrapper");

  const title = document.createElement("h1")
  title.append("Wrapper")

  wrapper.append(title)

  const reactWrapper = document.createElement("iframe");
  reactWrapper.id = "reactWrapper"
  reactWrapper.src = "http://localhost:3000"
  reactWrapper.width = "700"
  reactWrapper.height = "600"
  root?.append(reactWrapper);
} 

if(!haveCheckedPort && window.location.port === "3000"){
  haveCheckedPort = true;
  const wrapper = document.getElementById("wrapper")
  wrapper.remove();
}