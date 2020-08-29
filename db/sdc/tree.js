// Implement Trie (Prefix Tree)

var TrieNode = function(key) {
  return {
    key : key,
    isWord : false
  };
};

var Trie = function() {
  this.root = TrieNode('root');
};

// Inserts a word into the trie.

Trie.prototype.insert = function(word) {
  var tree = this.root;
  for(var i = 0; i < word.length; i++) {
    let curr = word[i];
    if(!tree[curr]) {
      tree[curr] = new TrieNode(curr);
    }
    tree = tree[curr];
  }
  tree.isWord = true;
};

// Returns if the word is in the trie.
Trie.prototype.search = function(word) {
  var tree = this.root;
  for(var i = 0; i < word.length; i++) {
    if(!tree[word[i]]) {
      return false;
    }
    tree = tree[word[i]];
  }
  return tree.isWord ? true : false;
};

// Returns if there is any word in the trie that starts with the given prefix.
Trie.prototype.startsWith = function(prefix) {
  var tree = this.root;
  for(var i = 0; i < prefix.length; i++){
    if(!tree[prefix[i]]) {
      return false;
    }
    tree = tree[prefix[i]];
  }
  return true;
};
