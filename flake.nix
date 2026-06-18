{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs
          pnpm
        ];
        shellHook = ''
          export EDITOR="${pkgs.nvim}/bin/nvim"

          printf '%s\n\n%s\n' "$(node -v)" "$(pnpm -v)"
        '';
      };
    };
}
