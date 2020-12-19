const cb = require("./codebreaker");

describe("posición indicada", () => {
  test("todas las posiciones correctas", () => {
    let value = cb.codebreaker("1234", "1234");
    expect(value).toBe("xxxx");
  });

  test("tres de las posiciones correctas", () => {
    let value = cb.codebreaker("1234", "1235");
    expect(value).toBe("xxx");
  });

  test("dos de las posiciones correctas", () => {
    let value = cb.codebreaker("1234", "1256");
    expect(value).toBe("xx");
  });
});

describe("el número está, pero en posición incorrecta", () => {
  test("todas las posiciones incorrectas", () => {
    let value = cb.codebreaker("1234", "4321");
    expect(value).toBe("____");
  });

  test("tres de las posiciones incorrectas", () => {
    let value = cb.codebreaker("1234", "4325");
    expect(value).toBe("___");
  });

  test("dos de las posiciones incorrectas", () => {
    let value = cb.codebreaker("1234", "2156");
    expect(value).toBe("__");
  });
});

describe("ninguna coincide", () => {
  test("ningún número pertenece", () => {
    let value = cb.codebreaker("1234", "5678");
    expect(value).toBe("");
  });
});

describe("pruebas variadas", () => {
  test("dos correctas, dos incorrectas", () => {
    let value = cb.codebreaker("1234", "1243");
    expect(value).toBe("xx__");
  });
  test("dos correctas, dos incorrectas!", () => {
    let value = cb.codebreaker("1234", "2134");
    expect(value).toBe("xx__");
  });

  test("una correcta, una incorrecta -posición1", () => {
    let value = cb.codebreaker("1234", "1526");
    expect(value).toBe("x_");
  });

  test("una correcta, una incorrecta -posición2", () => {
    let value = cb.codebreaker("1234", "6215");
    expect(value).toBe("x_");
  });
  test("una correcta, una incorrecta -posición3", () => {
    let value = cb.codebreaker("1234", "3654");
    expect(value).toBe("x_");
  });
  test("una correcta, una incorrecta -posición4", () => {
    let value = cb.codebreaker("1234", "6435");
    expect(value).toBe("x_");
  });
});
