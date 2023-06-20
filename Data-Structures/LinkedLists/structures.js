
//LINKED LIST

// A simple javascript program to introduce a linked list

	var head; // head of list

	/* Linked list Node. This inner class is made so that
	main() can access it */
	class Node {
		constructor(d)
		{
			this.data = d;
			this.next = null;
		} // Constructor
	}

	/* method to create a simple linked list with 3 nodes*/
	

		var head = new Node(1);
		var second = new Node(2);
		var third = new Node(3);

		/* Three nodes have been allocated dynamically.
		We have references to these three blocks as head,
		second and third

		llist.head	 second			 third
			|			 |				 |
			|			 |				 |
		+----+------+	 +----+------+	 +----+------+
		| 1 | null |	 | 2 | null |	 | 3 | null |
		+----+------+	 +----+------+	 +----+------+ */

		head.next = second; // Link first node with the second node

		/* Now next of the first Node refers to the second. So they
			both are linked.

		llist.head	 second			 third
			|			 |				 |
			|			 |				 |
		+----+------+	 +----+------+	 +----+------+
		| 1 | o-------->| 2 | null |	 | 3 | null |
		+----+------+	 +----+------+	 +----+------+ */

		second.next = third; // Link second node with the third node

		/* Now next of the second Node refers to third. So all three
			nodes are linked.

		llist.head	 second			 third
			|			 |				 |
			|			 |				 |
		+----+------+	 +----+------+	 +----+------+
		| 1 | o-------->| 2 | o-------->| 3 | null |
		+----+------+	 +----+------+	 +----+------+ */


   
// A simple javascript program for traversal of a linked list
	var head; // head of list

	/* Linked list Node. This inner class is made so that
	main() can access it */
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	/* This function prints contents of linked list starting from head */
	function printList()
	{
		var n = head;
		while (n != null) {
		console.log(n.data + " ");
			n = n.next;
		}
	}

	/* method to create a simple linked list with 3 nodes*/
	
	
		/* Start with the empty list. */
		

	var head = new Node(1);
		var second = new Node(2);
		var third = new Node(3);

		head.next = second; // Link first node with the second node
		second.next = third; // Link second node with the third node

		printList();





class Node
{
	constructor(d)
	{
		this.data=d;
		this.next = null;
	}
}

class LinkedList
{

constructor()
{
	this.head=null;
}


addToTheLast(node)
{
	if (this.head == null)
	{
		this.head = node;
	}
	else
	{
		let temp = this.head;
		while (temp.next != null)
			temp = temp.next;
		temp.next = node;
	}
}

printList()
{
	let temp = this.head;
	while (temp != null)
	{
		console.log(temp.data + " ");
		temp = temp.next;
	}
	console.log("<br>");
}
}

function sortedMerge(headA,headB)
{
	/* a dummy first node to
	hang the result on */
	let dummyNode = new Node(0);
	
	/* tail points to the
	last result node */
	let tail = dummyNode;
	while(true)
	{
		
		/* if either list runs out,
		use the other list */
		if(headA == null)
		{
			tail.next = headB;
			break;
		}
		if(headB == null)
		{
			tail.next = headA;
			break;
		}
		
		/* Compare the data of the two
		lists whichever lists' data is
		smaller, append it into tail and
		advance the head to the next Node
		*/
		if(headA.data <= headB.data)
		{
			tail.next = headA;
			headA = headA.next;
		}
		else
		{
			tail.next = headB;
			headB = headB.next;
		}
		
		/* Advance the tail */
		tail = tail.next;
	}
	return dummyNode.next;
}


/* Let us create two sorted linked
	lists to test the methods
	Created lists:
		llist1: 5->10->15,
		llist2: 2->3->20
	*/
let llist1 = new LinkedList();
let llist2 = new LinkedList();

// Node head1 = new Node(5);
llist1.addToTheLast(new Node(5));
llist1.addToTheLast(new Node(10));
llist1.addToTheLast(new Node(15));

// Node head2 = new Node(2);
llist2.addToTheLast(new Node(2));
llist2.addToTheLast(new Node(3));
llist2.addToTheLast(new Node(20));


llist1.head = sortedMerge(llist1.head,
									llist2.head);
console.log("Merged Linked List is:")
llist1.printList();	

// This code is contributed by patel2127



function SortedMerge(a,b)
{
	let result = null;
	
/* point to the last result pointer */
let lastPtrRef = result;
	
while(1)
{
	if (a == null)
	{
	lastPtrRef = b;
	break;
	}
	else if (b==null)
	{
	lastPtrRef = a;
	break;
	}
	if(a.data <= b.data)
	{
	MoveNode(lastPtrRef, a);
	}
	else
	{
	MoveNode(lastPtrRef, b);
	}
	
	/* tricky: advance to point to the next ".next" field */
	lastPtrRef = ((lastPtrRef).next);
}
return(result);
}
	

// This code is contributed by rag2127

function SortedMerge( A,  B) {
  
	if (A == null)
		return B;
	if (B == null)
		return A;

	if (A.data < B.data) {
		A.next = SortedMerge(A.next, B);
		return A;
	} else {
		B.next = SortedMerge(A, B.next);
		return B;
	}

}