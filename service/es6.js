const letExample = () => {
    return "Hello World";
  };
  
  const destructuringObject = () => {
    let obj = {
      a: 33,
      b: 55,
    };
    let { a, b } = obj;
    console.log(a);
    console.log(b);
    return { a, b };
  };
  
  const objectAssignment = () => {
    const a = 2;
    const b = 5;
  
    const obj = { a, b };
    console.log(obj);
    return obj;
  };
  const objectFuncAssignment = () => {
    const obj = {
      a: 2,
      b() {
        console.log("b");
      },
    };
    obj.b();
  };
  const spreadOpr = () => {
    const a = [1, 2];
    const b = [3, 4];
    const c = [...a, ...b];
    console.log(c);
    return { c };
  };
  
  const objectAssig = () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
  
    const obj3 = Object.assign({}, obj1, obj2);
  
    console.log(obj3);
    return obj3;
  };
  const entries = () => {
    const obj = {
      fName: "Nikhil",
      lName: "Patil",
      age: 25,
      country: "India",
    };
  
    const entries = Object.entries(obj);
    console.log(entries);
    return { entries };
  };
  const advSpreadOpr = () => {
    const a = {
      fName: "Nikhil",
      lName: "Patil",
    };
  
    const b = {
      ...a,
      lName: "Patil",
    };
    console.log(a);
    console.log(b);
    return { a, b };
  };
  
  module.exports = {letExample,destructuringObject,objectAssignment,objectFuncAssignment,spreadOpr,objectAssig,entries,advSpreadOpr,
  };