class Node{
    int data;
    Node next;
    Node prev;
 Node(int data){
    this.data = data;
    next = null;
    prev = null;
 }
 Node(int data, Node prev1, Node next1){
    this.data = data;
    next = next1;
    prev = prev1;
 }
}
public class Solution{
   public static Node reverse(Node head){
    if(head == null){
        return null;
    }
    Node curr1 = head;
        while(curr1 != null){
            Node temp = curr1.next;
            curr1.next = curr1.prev;
            curr1.prev = temp;
            head = curr1;
            curr1 = temp;
        }
    
        return head;
    }
    public static void main(String[] args) {
        Node head = new Node(5);
        Node curr = head;
        for(int i = 1; i < 8; i++){
            Node temp = new Node(i);
            curr.next = temp;
            temp.prev = curr;
            curr = temp;
        }
        Node head1 = reverse(head);
        
        Node curr1 = head1;
        while(curr1 != null){
        System.out.println(curr1.data);
        curr1 = curr1.next;
        }
        }
    }
