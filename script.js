//Jquery Function to make JS run only after 
// the page has finished loading
$(function () {
    let addBtn = $('.add-btn');
    let inpText = $('.add-text');
    let list = $('.task-list');



    //This adds the user's input
    //to the list
    addBtn.on('click', function () {
        //Using template literals to create the item,
        //inpText.val() is the value of the text-input 
        let item = `<li>
        <div class="check-task col1">
            <input type="checkbox">
        </div>
        <div class="task col2 ">${inpText.val()}</div>
        <div class="remove-task col3">
        </div>
    </li> `;

        list.append(item);
        //Resets the input field
        inpText.val('')
    })


    //end of ready function
})