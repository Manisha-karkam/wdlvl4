 const todoList = () => {
    total = [];
    const add = (todoItem) => {
      total.push(todoItem);
    };
    const markAsComplete = (index) => {
      total[index].completed = true;
    };
  
    const overdue = () => {
      
      const array = total.filter((person) => person.dueDate == yesterday);
      return array;
    };
  
    const dueToday = () => {
      
      const array = total.filter((person) => person.dueDate === today);
      return array;
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      const array = total.filter((person) => person.dueDate === tomorrow);
  
      return array;
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      array = [];
      const display = list.map((item) => {
        const completionStatus = item.completed ? "[x]" : "[ ]";
        const displayedDate =
          item.dueDate === new Date().toLocaleDateString("en-CA")
            ? ""
            : item.dueDate;
        array.push(completionStatus + " " + item.title + " " + displayedDate);
      });
      return array.join("\n").trim();
    };
  
    return {
      total,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  module.exports = todoList;
