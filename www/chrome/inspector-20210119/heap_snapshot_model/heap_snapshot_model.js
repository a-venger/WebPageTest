var t=Object.freeze({__proto__:null,HeapSnapshotProgressEvent:{Update:"ProgressUpdate",BrokenSnapshot:"BrokenSnapshot"},baseSystemDistance:1e8,AllocationNodeCallers:class{constructor(t,s){this.nodesWithSingleCaller=t,this.branchingCallers=s}},SerializedAllocationNode:class{constructor(t,s,e,i,o,h,d,a,n,c,r){this.id=t,this.name=s,this.scriptName=e,this.scriptId=i,this.line=o,this.column=h,this.count=d,this.size=a,this.liveCount=n,this.liveSize=c,this.hasChildren=r}},AllocationStackFrame:class{constructor(t,s,e,i,o){this.functionName=t,this.scriptName=s,this.scriptId=e,this.line=i,this.column=o}},Node:class{constructor(t,s,e,i,o,h,d){this.id=t,this.name=s,this.distance=e,this.nodeIndex=i,this.retainedSize=o,this.selfSize=h,this.type=d,this.canBeQueried=!1,this.detachedDOMTreeNode=!1,this.isAddedNotRemoved=null}},Edge:class{constructor(t,s,e,i){this.name=t,this.node=s,this.type=e,this.edgeIndex=i,this.isAddedNotRemoved=null}},Aggregate:class{constructor(){this.count,this.distance,this.self,this.maxRet,this.type,this.name,this.idxs}},AggregateForDiff:class{constructor(){this.indexes=[],this.ids=[],this.selfSizes=[]}},Diff:class{constructor(){this.addedCount=0,this.removedCount=0,this.addedSize=0,this.removedSize=0,this.deletedIndexes=[],this.addedIndexes=[],this.countDelta,this.sizeDelta}},DiffForClass:class{constructor(){this.addedCount,this.removedCount,this.addedSize,this.removedSize,this.deletedIndexes,this.addedIndexes,this.countDelta,this.sizeDelta}},ComparatorConfig:class{constructor(t,s,e,i){this.fieldName1=t,this.ascending1=s,this.fieldName2=e,this.ascending2=i}},WorkerCommand:class{constructor(){this.callId,this.disposition,this.objectId,this.newObjectId,this.methodName,this.methodArguments,this.source}},ItemsRange:class{constructor(t,s,e,i){this.startPosition=t,this.endPosition=s,this.totalLength=e,this.items=i}},StaticData:class{constructor(t,s,e,i){this.nodeCount=t,this.rootNodeIndex=s,this.totalSize=e,this.maxJSObjectId=i}},Statistics:class{constructor(){this.total,this.v8heap,this.native,this.code,this.jsArrays,this.strings,this.system}},NodeFilter:class{constructor(t,s){this.minNodeId=t,this.maxNodeId=s,this.allocationNodeId}equals(t){return this.minNodeId===t.minNodeId&&this.maxNodeId===t.maxNodeId&&this.allocationNodeId===t.allocationNodeId}},SearchConfig:class{constructor(t,s,e,i,o){this.query=t,this.caseSensitive=s,this.isRegex=e,this.shouldJump=i,this.jumpBackward=o}toSearchRegex(t){throw new Error("Unsupported operation on search config")}},Samples:class{constructor(t,s,e){this.timestamps=t,this.lastAssignedIds=s,this.sizes=e}},Location:class{constructor(t,s,e){this.scriptId=t,this.lineNumber=s,this.columnNumber=e}}});export{t as HeapSnapshotModel};