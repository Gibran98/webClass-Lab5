$("#submitBtn").on("click", function(event) {
	event.preventDefault();

	if ($("#inputText").val() == "") {
		$("#errMsg").text("Please enter some text to the input before adding the item");
	} else {
		let input = $("#inputText").val();

		$("#inputText").val("");
		$("#errMsg").text("");

		let newItem = "<li><p class='itemText'>" + input + "</p><button type='submit' class='checkBtn'>Check</button><button type='submit' class='deleteBtn'>Delete</button></li>";

		$("#list").append(newItem);
	}
});

$("#list").on("click", "button", function(event) {
	event.preventDefault();

	if ($(this).hasClass("checkBtn")) {
		$(this).prev().toggleClass("striked");
	}
	else if ($(this).hasClass("deleteBtn")) {
		$(this).parent().remove();
	}
});

