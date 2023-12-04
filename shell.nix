with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "ruby";
    buildInputs = [
       ruby 
       rubyPackages.rspec-core
    ];
}
