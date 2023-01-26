// functions for the game scrabble:

// random integer function
function get_random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

let board = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
  ];

function update_position_on_board(original_board,letter,row,column){
    new_board = original_board
    new_board[row][column] = letter
    return new_board
}

function add_letters(original_bag,letter_name,num_letters) {
    let new_bag = original_bag
    for (let i=0; i<num_letters;i++) {
    new_bag.push(letter_name)
    }
    return new_bag
}

function create_new_bag() {
    let current_bag = []
    add_letters(current_bag,"a",9)
    add_letters(current_bag,"b",2)
    add_letters(current_bag,"c",2)
    add_letters(current_bag,"d",4)
    add_letters(current_bag,"e",12)
    add_letters(current_bag,"f",2)
    add_letters(current_bag,"g",3)
    add_letters(current_bag,"h",2)
    add_letters(current_bag,"i",9)
    add_letters(current_bag,"j",1)
    add_letters(current_bag,"k",1)
    add_letters(current_bag,"l",4)
    add_letters(current_bag,"m",2)
    add_letters(current_bag,"n",6)
    add_letters(current_bag,"o",8)
    add_letters(current_bag,"p",2)
    add_letters(current_bag,"q",1)
    add_letters(current_bag,"r",6)
    add_letters(current_bag,"s",4)
    add_letters(current_bag,"t",6)
    add_letters(current_bag,"u",4)
    add_letters(current_bag,"v",2)
    add_letters(current_bag,"w",2)
    add_letters(current_bag,"x",1)
    add_letters(current_bag,"y",2)
    add_letters(current_bag,"z",1)
    return current_bag
}
let bag_1 = create_new_bag()

function select_random_letters(original_bag,num_letters) {
    let selected_letters = []
    let available_letters = original_bag
    for (let i=0; i<num_letters;i++) {
        let position = get_random_int(0,available_letters.length)
        selected_letters.push(available_letters.splice(position,1))
    }
    return selected_letters
}

//select an initial hand for the computer
let computer_hand = select_random_letters(bag_1,7)

//need to convert this to an export-import pair instead
let word_list = [
    "an",
    "be",
    "no"
];

//check word validity
function check_validity(word_0) {
    return word_list.includes(word_0)
}

//allow computer to generate a word
function generate_word(letter_array, word_length) {
    let copy_array = letter_array
    let possible_word = []
    for (let i=0; i<word_length;i++) {
        let position = get_random_int(0,copy_array.length)
        possible_word.push(copy_array.splice(position,1))
    }
    let new_word = possible_word.join('');
    return new_word
}

//error: why is the original letter_array being affected?
//copy_array should be a copy so that the original array is not affected
console.log(generate_word(['a','b','c','d'],2))

function generate_valid_word(letter_array) {
    let word_found = false
    for (let i=0; i<20;i++) {
        let possible_word = generate_word(letter_array,2)
        console.log(possible_word)
        if (check_validity(possible_word)) {
            word_found = true
            return possible_word
        }
    }
}

//once a word has been generated it needs to be put onto the board
function check_space(word_0, start_position, end_position) {

}