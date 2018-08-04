describe('DoublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addNode", "removeNode", and "contains"', function() {
    expect(doublyLinkedList.addNode).to.be.a('function');
    expect(doublyLinkedList.removeNode).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should assign the first node in the link as the head and tail', function() {
    doublyLinkedList.addNode(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should add node to the end when no second argument is passed', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    expect(doublyLinkedList.tail.value).to.equal(6);  
  });

  it('should add node to after value when addNode is called with a second argument', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7, 5);
    expect(doublyLinkedList.head.next.value).to.equal(7);
    expect(doublyLinkedList.head.next.next.value).to.equal(6);
  });

  it('should add node to end when addNode is called with a second argument which does not exist', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7, 8);
    expect(doublyLinkedList.head.next.value).to.equal(6);
    expect(doublyLinkedList.head.next.next.value).to.equal(7);
  });
  
  it('should reassign any newly added node to the end as the tail', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    expect(doublyLinkedList.tail.value).to.equal(6);  
    doublyLinkedList.addNode(7);
    expect(doublyLinkedList.tail.value).to.equal(7); 
  });

  it('should have previous node correctly pointing to newly added node', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    expect(doublyLinkedList.head.next.value).to.equal(6);
  });

  it('should have newly added node correctly pointing to previous node', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    expect(doublyLinkedList.tail.previous.value).to.equal(5);  
    doublyLinkedList.addNode(7);
    expect(doublyLinkedList.tail.previous.value).to.equal(6);  
  });

  it('should have next node correctly pointing back to newly added node', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7, 5);
    expect(doublyLinkedList.tail.previous.value).to.equal(7);     
  });

  it('should have newly added node correctly pointing to next node', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7, 5);
    expect(doublyLinkedList.head.next.next.value).to.equal(6);    
  });

  it('should return undefined when removeNode is called on an empty list', function() {
    expect(doublyLinkedList.removeNode()).to.equal(undefined);  
    doublyLinkedList.addNode(5);
    doublyLinkedList.removeNode();
    expect(doublyLinkedList.removeNode()).to.equal(undefined);
  });

  it('should remove node at the head when no argument is passed', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.removeNode();
    expect(doublyLinkedList.head.value).to.equal(6);   
    expect(doublyLinkedList.tail.value).to.equal(6);   
  });

  it('should remove node of value passed as argument', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7);
    doublyLinkedList.removeNode(6);
    expect(doublyLinkedList.head.next.value).to.equal(7);   
    expect(doublyLinkedList.tail.previous.value).to.equal(5);   
  });

  it('should return the value of the removed node when removeNode is called', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7);
    expect(doublyLinkedList.removeNode(6)).to.equal(6);
  });

  it('should assign previous node to point to next node when a node is removed', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7);
    doublyLinkedList.removeNode(6);
    expect(doublyLinkedList.head.next.value).to.equal(7);    
  });

  it('should assign next node to point to previous node when a node is removed', function() {
    doublyLinkedList.addNode(5);
    doublyLinkedList.addNode(6);
    doublyLinkedList.addNode(7);
    doublyLinkedList.removeNode(6);
    expect(doublyLinkedList.tail.previous.value).to.equal(5);     
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addNode(4);
    doublyLinkedList.addNode(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addNode(4);
    doublyLinkedList.addNode(5);
    doublyLinkedList.removeNode();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

});
