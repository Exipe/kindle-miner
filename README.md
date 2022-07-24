# Kindle Miner
(This app is available via GitHub pages [here](https://exipe.github.io/kindle-miner/)).

Kindle Miner is a utility to efficiently mine sentences from Amazon Kindle, in combination with [Yomichan](https://foosoft.net/projects/yomichan/).

![Preview](https://user-images.githubusercontent.com/16084012/180628081-88f14e70-b96e-440a-bdd3-b62fc52c6b38.png)

## Basic usage
First, ensure the Vocabulary builder is enabled on your Kindle.
With this feature enabled, any word you look up while reading will be saved to a local database in the Kindle's storage.

Connect the Kindle to your PC and locate the 'vocab.db' file.
By default this is hidden on Windows, but search the file name and you should find it.

![Locating vocab.db](https://user-images.githubusercontent.com/16084012/180628121-cbcaf51f-e442-4ff2-922c-e7b76db20941.png)

Drag & drop this file inside the Kindle Miner application.
You should now see a table of all the words you have looked up, as well as the context they appeared in.

This table is ordered by how frequently the words appear in the Japanese language.
For more info about the frequency, see [Anki Frequency Inserter](https://github.com/sschmidTU/anki-frequency-inserter#anki-frequency-inserter).

## Usage with Yomichan
I recommend the use of [Yomichan](https://foosoft.net/projects/yomichan/) with [AnkiConnect](https://foosoft.net/projects/anki-connect/) to automatically create notes for Anki. Refer to the [Anki Integration](https://github.com/FooSoft/yomichan#anki-integration) section from Yomichan, for instructions on how to set this up.

I recommend configuring the Anki card format as follows;

![Sample Anki card format](https://user-images.githubusercontent.com/16084012/180628375-515aa66c-3536-40ca-be76-771a7cbc751b.png)

With this configuration, creating Anki notes is as simple as copying the context text, hovering over the word and pressing the 'Add expression' button;

![Creating a note](https://user-images.githubusercontent.com/16084012/180628489-b39ed0f0-db09-462b-9a6f-fc22e8d44e82.png)
