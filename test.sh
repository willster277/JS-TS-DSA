#!usr/bin/bash

arg1=$1;
if [ -z $arg1 ]; then
    arg1="*";
    elif [ $arg1 = "-h" ] || [ $arg1 = "--help" ]; then
    echo "Usage: pnpm test [test-pattern]";
    echo "";
    echo "Runs tests matching the given pattern, or all tests if no pattern specified.";
    echo "Patterns only specify the file name, the \`.spec.ts\` extension is always added to the end of your pattern.";
    exit;
fi;

# if arg1 != "*" echo "custom"
if [[ $arg1 != "*" ]]; then
    echo -e "\033[33mWARN: Using 'src/$arg1.spec.ts' as the test file pattern.\033[0m";
    echo -e "\033[33m      This feature is haphazardly implemented and will not ensure the file(s) exist.\033[0m";
fi;
pnpm exec mocha "src/$arg1.spec.ts" --loader=ts-node/esm --experimental-specifier-resolution=node --timeout=30000 --recursive;