#!/usr/bin/env bash
# shellcheck disable=SC1117

# Set regex outputs
file_pihole_regex="/etc/pihole/regex.list"
file_revolveruk_regex="/etc/pihole/revolveruk-regex.list"

# Restore config prior to previous install
# Keep entries only unique to pihole regex
if [ -s "$file_pihole_regex" ] && [ -s "$file_revolveruk_regex" ]; then
	echo "[i] Removing revolveruk's regex.list from a previous install"
	comm -23 <(sort $file_pihole_regex) <(sort $file_revolveruk_regex) | sudo tee $file_pihole_regex > /dev/null
	sudo rm -f $file_revolveruk_regex
fi

# Fetch revolveruk regex.list
echo "[i] Fetching revolveruk's regex.list"
sudo wget -qO "$file_revolveruk_regex" https://raw.githubusercontent.com/revolveruk/pihole-regex/master/regex.list

# Exit if unable to download list
if [ ! -s "$file_revolveruk_regex" ]; then
        echo "Error: Unable to fetch revolveruk regex.list"
        exit
else
        revolveruk_regex="$(cat $file_revolveruk_regex)"
        echo "[i] $(wc -l <<< "$revolveruk_regex") regexps found in revolveruk's regex.list"
fi

# Check existing configuration
if [ -s "$file_pihole_regex" ]; then
	# Extract non revolveruk-regex entries
	existing_regex_list="$(cat $file_pihole_regex)"

	# Form output (preserving existing config)
        echo "[i] $(wc -l <<< "$existing_regex_list") regexps exist outside of revolveruk's regex.list"
        final_regex=$(printf "%s\n" "$revolveruk_regex" "$existing_regex_list")

else
	echo "[i] No regex.list differences to revolveruk's regex.list"
	final_regex=$(printf "%s\n" "$revolveruk_regex")

fi

# Output to regex.list
echo "[i] Saving to $file_pihole_regex"
LC_COLLATE=C sort -u <<< "$final_regex" | sudo tee $file_pihole_regex > /dev/null

# Refresh Pi-hole
echo "[i] Refreshing Pi-hole"
sudo killall -SIGHUP pihole-FTL

echo "[i] Done"

# Output to user
echo $'\n'
cat $file_pihole_regex