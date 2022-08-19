<template>
  <div class="css-8c943">
    <div class="css-h7ek">
      <button @click="changeTab('dyor')">DYOR</button>
      <button @click="changeTab('library')">Library</button>
      <button @click="changeTab('info')">AUDIT platform</button>
    </div>
    <Transition>
      <div class="css-h7832">
        <template v-if="navTab === 'dyor'">
          <p>
            - Designed to give you the knowledge and resources to holistically
            assess a project. Useful for all investors who want to methodically
            research a project and share the results with others. $7.7 billion
            was stolen in crypto scams in 2021. Do Your Own Research so this
            doesn’t happen to you.
          </p>
          <p class="sb62">What is DYOR?</p>
          <p>
            Do your own research is a phrase that gets thrown around a lot in
            the crypto world. And while it’s a crucial step before making any
            investment or using any new product, it’s also confusing for a
            beginner as it is completely lacking in any specific details or
            instructions. Many people have been told DYOR but are likely unsure
            of what exactly doing your own research entails. Have you done
            sufficient research if you review the project website, read the
            whitepaper, or spent some time on their Telegram? The answer is
            extremely subjective and will vary from person to person. Wouldn’t
            it be nice if there was a resource that could guide someone through
            the research process from start to finish? Look no further.
          </p>
          <p class="sb62">What’s Our Solution?</p>
          <p>
            We have developed an online tool that walks you through 27 different
            evaluation points and assists with the following: It provides an
            explanation of why each point matters so that you can understand
            what you are researching. It gives you clearly written steps to
            follow to perform the evaluation. It calculates a score based on the
            information you entered so that you have a standardized basis for
            comparison across different projects. Lastly, it generates a report
            that you can share on social media so that others can benefit from
            the research you have performed.
          </p>
          <p class="sb62">Who Can Use it?</p>

          <p>
            It is designed with the total beginner in mind to properly evaluate
            a project PRIOR to investing in or using it. So no prior experience
            or knowledge is required. And while it is designed for a total
            beginner to use, it is also a useful resource for crypto veterans as
            well. Even if they do not need to learn how or why to do to
            research, it provides a platform that assists with documentation and
            generates reports that will greatly benefit the community.
          </p>

          <p class="sb62">Learn to be a Better Investor</p>

          <p>
            With Smart Contract Audit Token, our mission is to make Cardano as
            safe and transparent as possible for investors and users. This
            involves performing community-driven, decentralized smart contract
            audits, but it also involves a lot more. We want to give you the
            tools and knowledge to properly evaluate a project before investing
            in it. Simply having a smart contract audit does not mean it will be
            a good investment. There are several other factors that need to be
            taken into consideration while researching a potential investment
            before you should be comfortable committing your hard-earned money.
          </p>

          <p class="sb62">Designed to be Updated</p>

          <p>
            People will have varying thoughts on what should be covered in this
            review and how much each item should be weighted. That is a feature,
            not a bug. We want to get everyone’s input and then have it reflect
            the consensus of the community. Because that is what it is made for,
            our community. This will allow us all to use the same standards in
            evaluating a project and ensure when comparing two projects that it
            is a true “apples to apples” comparison. Therefore, we have designed
            this tool to be a good starting point and allow a comprehensive
            review, but we do not want it to be a final version. Anyone who has
            suggestions of things to add, things to remove, changes to the
            worksteps, etc. can submit a form with their suggestions and have
            the changes incorporated into the tool. This ensures that the
            research we are performing and sharing truly reflects our combined
            values, standards, and beliefs.
          </p>
        </template>

        <template v-if="navTab === 'library'">
          <p>a</p>
        </template>

        <template v-if="navTab === 'info'">
          <p class="sb62">ISPO Goal</p>

          <p>
            We are attempting to raise 1.5 Million ADA through the ISPO. With a
            fully saturated pool from day one, this would run for approximately
            6 months. It is unlikely that the pool would be fully saturated from
            day one, which means it would likely take longer than 6 months. How
            much longer is difficult to predict without knowing how much
            interest there will be or how long it would take to become
            saturated, if at all. If the ISPO is running considerably longer
            than expected and not raising enough ADA to justify keeping it open,
            we may close it early before all tokens have been distributed.
          </p>
          <p class="sb62">Why we are Raising Funds</p>

          <p>
            The ADA raised through the ISPO will be used to provide liquidity to
            DEXs. The fees that are earned from providing liquidity will be used
            to fund audits that are voted on by our token holders (see how it's
            funded section of whitepaper for more information). The target of
            1.5 million was selected as we expect that to be a sufficient amount
            of liquidity for the foreseeable future (would put our token in the
            top 10 on Minswap in terms of liquidity which have seemed sufficient
            for other tokens listed there). The ADA that is raised in the ISPO
            will be in a wallet controlled by the Dev team. We are currently
            unable to have the funds automatically deposited into the multi-sig
            wallet. The funds will be transferred every epoch from the ISPO
            wallet to the multi-sig wallet controlled by the DAO.
          </p>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navTab: "dyor",
      library: "library",
    };
  },
  methods: {
    changeTab(e) {
      this.navTab = e;
    },
  },
}; // background: #3d4144;
</script>

<style scoped>
.css-h7832 .sb62 {
  font-weight: 600;
  margin: 1rem 0;
}
.css-h7ek button {
  padding: 0.75rem 50px;
  background: transparent;
  border: none;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.css-h7ek button:hover {
  background: #303437;
}
.css-h7ek {
  width: 100%;
  height: auto;
  max-height: 50px;
  min-height: 50px;
  display: flex;
  border: 1px solid #3a3b3c;
}

.css-8c943 {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #23272a;
  align-items: center;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
}

.css-h7832 {
  color: #ffffff;
  padding: 1rem 2rem;
  height: 100%;
  max-height: 80%;
  max-height: 300px;
  display: inline-block;
  text-overflow: ellipsis;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.css-h7832::-webkit-scrollbar {
  width: 10px;
}

.css-h7832::-webkit-scrollbar-track {
  background: transparent;
}

.css-h7832::-webkit-scrollbar-thumb {
  background: #3d4144;
}

.css-h7832::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>