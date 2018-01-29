

		var words = ["fun", "exciting", "about not giving up", "being helpful", "being open", "what I learned at CodingDojo!"],
			el = document.getElementById('magic'),
			word_count = 0,
			character_counter = 0;

		function updateText()
		{
			if(words[word_count][character_counter] == ' '){
				el.innerHTML += '&nbsp;';
				character_counter++;
			}
			else{ el.innerHTML = el.innerHTML+words[word_count][character_counter++];
			}
			if(character_counter == words[word_count].length+1)
			{
				word_count++; 	//choose a different word
				character_counter = 0;	//start over with the first character of the word
				el.innerHTML = '';  //set the html to be blank

				//if we're displaying the last word, go back to the first word
				if(word_count == words.length){
					word_count = 0;
				}
			}

		}

		setInterval(updateText,300);
