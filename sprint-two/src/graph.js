

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var obj = {};
  obj.value = node;
  obj.edge = {};
  this[node] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (node === +key) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(node1, node2) {
  if (this[node1] === undefined || this[node2] === undefined) {
    return false;
  }
  else if (this[node1].edge[node2] === node2 && this[node2].edge[node1] === node1) {
    return true;
  } 
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(node1, node2) {
  this[node1].edge[node2] = node2;
  this[node2].edge[node1] = node1;
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(node1, node2) {
  delete this[node1].edge[node2];
  delete this[node2].edge[node1];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var that = this;
  for (var key in that) {
    if (Number(key) == key) {  
      cb(Number(key));
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


