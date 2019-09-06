function op(operation, attrState, attrFunc, execute = 'calc') {
  if (execute === 'set') {
    attrFunc(operation);
  } else if (operation === 'minus') {
    attrFunc(attrState - 1);
  } else if (operation === 'plus') {
    attrFunc(attrState + 1);
  }
}

export default op;
