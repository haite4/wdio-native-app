CONFIG_FILE="configs/wdio.conf-local.ts"
SPEC_FILE="**"

while getopts ":c:s:" opt; do
  case $opt in
    c)
      if [[ -z "$OPTARG" ]]; then
        echo "Error: Option -c requires an argument."
        exit 1
      fi
      CONFIG_FILE="$OPTARG"
      ;;
    s)
      if [[ -z "$OPTARG" ]]; then
        echo "Error: Option -s requires an argument."
        exit 1
      fi
      SPEC_FILE="$OPTARG"
      ;;
    \?)
      echo "Unknown option: -$OPTARG"
      exit 1
      ;;
    :)
      echo "Error: Option -$OPTARG requires an argument."
      exit 1
      ;;
  esac
done

echo "Running WebdriverIO with the following settings:"
echo "  CONFIG_FILE: $CONFIG_FILE"
echo "  SPEC_FILE: $SPEC_FILE"

npx wdio run "$CONFIG_FILE" --spec "$SPEC_FILE"
