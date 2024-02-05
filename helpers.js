export function appendLastNode (list, node) {
  if (!list.nextNode) {
    list.nextNode = node;
    return;
  }
  appendLastNode(list.nextNode, node);
}

export function getListSize (list) {
  let tmp = list;
  let cont = 0;
  while (tmp) {
    cont++;
    tmp = tmp.nextNode;
  }
  console.log(`Total amount of nodes: ${cont}`)
  return cont;
}

export function getLastNode (list) {
  if (!list.nextNode) {
    return list;
  }
  return getLastNode(list.nextNode);
}

export function deleteLastNode (list) {
  if (!list.nextNode.nextNode) {
    list.nextNode = null;
    return list;
  }
  return deleteLastNode(list.nextNode);
}

export function checkNodeValue (list, value) {
  if (list.value === value) return true;
  if (!list.nextNode) return false;
  return checkNodeValue(list.nextNode, value);
}

export function findNodeIndex (list, value, cont = 0) {
  if (list.value === value) return cont;
  if (!list.nextNode) return null;
  cont = findNodeIndex(list.nextNode, value, ++cont);
  return cont;
}

export function printNodes (list) {
  let str = '';
  let tmp = list;
  while (tmp) {
    str = str.concat(`( ${tmp.value} ) -> `);
    tmp = tmp.nextNode;
  }
  str = str.concat(tmp);
  return `${str}`;
}
