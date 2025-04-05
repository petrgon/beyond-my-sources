# Beyond My Sources
Adds a button to DnDBeyond to filter sources you own. Works with Violentmonkey extension and similar. Tested in Chrome and Firefox.

Before you use this script you have to **update the list of sources you own**! See the [How to install](#how-to-install-from-greasy-fork) chapter.

Before you **update to a never version** make a backup of `mySources` variable!

![Button Game Rules image](https://raw.githubusercontent.com/petrgon/beyond-my-sources/main/button.png)
![Button Encounter Builder image](https://raw.githubusercontent.com/petrgon/beyond-my-sources/main/encounter-builder.png)

![Button Encounter Builder image](https://raw.githubusercontent.com/petrgon/beyond-my-sources/main/showcase.gif)

## How to install from Greasy Fork
Don't forget to make a backup of the `mySources` variable if you are updating from earlier versions.
1. Install [violentmonkey](https://violentmonkey.github.io/) browser extension or any compatible alternative.
2. Install script from [Greasy Fork](https://greasyfork.org/en/scripts/451010-beyond-my-content).
5. Find the script in the extension and click Edit.
6. Update sources you own in the `mySources` variable. Add `//` before each source you DON'T own.
7. Save the script.
8. Reload DnDBeyond page.

## How to install manually
Don't forget to make a backup of the `mySources` variable if you are updating from earlier versions.
1. Install [violentmonkey](https://violentmonkey.github.io/) browser extension or any compatible alternative.
2. Create a new script in extension.
3. Copy the content of the [script.js](script.js) file from this repo.
4. Update source you own in the `mySources` variable. Add `//` before each source you DON'T own.
5. Save the script.
6. Reload DnDBeyond page.

## How to automatically determine sources
1. visit the [sources](https://www.dndbeyond.com/sources) page on DnDBeyond to save all of your owned sources to your browser.
2. Visit the content management page of a campaign that is sharing sources with you to save the shared sources for the current campaign to your browser. Note that only sources from one campaign at a time can be saved.
  example url: `https://www.dndbeyond.com/campaigns/<campaign_id>/content-management`

If any sources have been saved, the `mySources` variable will be overridden.

## Links
[Greasy Fork](https://greasyfork.org/en/scripts/451010-beyond-my-sources)

[Github](https://github.com/petrgon/beyond-my-sources/)
