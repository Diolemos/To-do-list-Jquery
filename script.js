//Jquery Function to make JS run only after 
// the page has finished loading
$(function () {
    let addBtn = $('.add-btn');
    let inpText = $('.add-text');
    let list = $('.task-list');
    let removeBtn = $('.remove-task')


    //*************************************
    //This adds the user's input
    //to the list
    //*************************************    
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

    //*************************************
    //This deletes the selected item
    //
    //*************************************

    //It's necessery to use event delegation
    //instead of removeBtn.on(click), this would asign the event listener to the buttons the already exist on the page, not working with the items the user created.
    //So the Event listener is added to the container,
    //and the button is added as a paremeter

    list.on('click', '.remove-task', function () {
        $(this).parent().remove()
    })






    //*************************************
    //This strikes the selected item
    //
    //*************************************
    function toggleStrike() {

    }

    //end of ready function
})