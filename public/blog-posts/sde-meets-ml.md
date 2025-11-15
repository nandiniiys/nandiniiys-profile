My first week in machine learning research as a grad student felt like stepping into a storm. My experiments were messy, unpredictable, and nothing behaved the same way twice.

I was convinced my engineering instincts like pipelines and CI checks would be useless in a workflow that was so random and constantly changing. Turns out they were the only things keeping my work grounded. The same habits and tools that helped me ship production code started keeping my research sane too.

Here are some that followed me across that bridge.

## Push Early, Push Often (and Delete Freely)

Git doesn't just accomplish version control, it's my research journal. Every commit is a breadcrumb trail of ideas that worked, and plenty that didn't. I commit after every small, meaningful change because experiments are fragile. Sometimes a single misplaced random seed, or gradient clipping I temporarily got rid of and forgot to add back can derail results. Frequent commits mean I can always jump back to a working state without panic.

And yes, I delete code. Regularly. Anything unused goes. The beauty of version control is that nothing's ever really lost. So, I get to work off of clean minimal code and I retain the big picture of what the system really looks like.

## Be curious, rely on branching for safety

Each new experiment gets its own branch. That way, I can test risky ideas without destabilizing the main code. Sometimes I'll have five branches exploring small variations; different reward functions, or model tweaks and merge only what ends up working. It's the difference between disorder and controlled exploration. Every branch is a self-contained idea. Sometimes they fail. Sometimes they surprise you. But they always teach you something without burning down the rest.

## Reproducibility is a blessing

Whenever I integrate a new framework, I tell myself I'll make a note of the package and the version I'm using somewhere later and I always forget. Instead, I use conda and recreate the environment.yml file straight from my current setup every few weeks. It takes seconds, but future me always says thank you.

I once needed to demo my work in a lab presentation but could not get my laptop to start up. I pulled the code from GitHub onto a borrowed computer, created my conda environment straight from the YAML file and everything just worked! Maintaining environment portability sounds like a problem for a later time, but it's the difference between "it runs on my machine" and "it runs anywhere."

## Balance Abstraction and Clarity

I've learned to treat code structure like seasoning, just enough abstraction to keep things scalable, not so much that it hides what's happening. For example, I pull out memory-management logic into helper functions, but keep everything memory in a single package. That way, I can switch between implementations with a single line in the training loop. It keeps things modular without turning the code into a maze of function calls across multiple files I have to dig through just to understand what data is being stored in the memory.

The trick is restraint: abstraction should make change easy, not comprehension difficult.

## Documentation and the Joy of Config Management

For experiment configurations, I use Draccus. With YAML configs and flexible schemas it keeps my experiments easy to tweak and easy to rerun. I automatically dump the configuration file that was used into the run results directory so that I don't have to keep maintaining different YAML files for every little change I make but can still extract the exact configurations that made a particular run work well.

But tools are only half the story. Good documentation is what bridges my configuration files across runs to recognizable intent. I note why each run exists, what it tests, and what it found. Nothing too elaborate, I just add a new nandinii-notes config to the YAML dump in the run directory.

## Streamlit for Quick Visual Sanity Checks

Over the summer, I threw together a simple Streamlit app to read experiment logs and plot results. Instead of running multiple scripts, I click a few buttons and instantly see reward curves, loss behavior and outliers. While this feature was initially only meant to generate static plots from logs on the fly, I have since expanded it to include interactive analysis. I added support for plotting the trained model outputs at various checkpoints against configurable input parameters allowing me to better infer whether the network learned the correct policy. It's become my go-to debugging tool, helping me catch issues before wasting a night's training time.

## The Debugging Instinct That Never Left

Production on-call rotations taught me something useful for research: how to spot weirdness. In industry, I used to sift through logs for issues in systems I didn't write, learning to recognize when patterns just didn't look right. That instinct carried over. Now, when a loss curve plateaus too early or an accuracy spike looks suspiciously sharp, my brain flags it before my data does. It's the same instinct, pattern recognition in noisy data.

## Conclusion

Machine learning research still feels messy at times, but bringing engineering discipline into that space made it manageable, meaningful, and even exciting. I'm still learning and I have a long way to go, but the habits I carried with me from software engineering have become my foundation. If you're making the same transition, start there. It makes all the difference.

Research will always be messy, but it doesn't have to be disorganized.